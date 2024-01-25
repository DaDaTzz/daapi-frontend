import { getInvokeCountTopListUsingGet } from '@/services/api-backend/analysisController';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import React, { useEffect, useState } from 'react';
//import EChartsReact from 'echarts-for-react';

const InterfaceAnalysis: React.FC = () => {
  const [data, setData] = useState<API.InterfaceVO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      getInvokeCountTopListUsingGet().then((res) => {
        if (res.data) {
          setData(res.data);
        }
      });
    } catch (e: any) {}
  }, []);

  const chartData = data.map((item) => {
    return {
      value: item.totalNum,
      name: item.name,
    };
  });

  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <PageContainer>
      {/*<EChartsReact loadingOption={{*/}
      {/*  showLoading: loading*/}
      {/*}} option={option}/>*/}
    </PageContainer>
  );
};
export default InterfaceAnalysis;
