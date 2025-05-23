import React, { Suspense } from 'react';

// Import chart using React.lazy instead of next/dynamic
const Chart = React.lazy(() => import('react-apexcharts'));

interface OKRStatusChartProps {
  isGPA: boolean;
}

const OKRStatusChart: React.FC<OKRStatusChartProps> = ({ isGPA }) => {
  const series = isGPA
    ? [
        {
          name: 'Aprovados',
          data: [12, 18, 15, 14, 16, 20],
        },
        {
          name: 'Pendentes',
          data: [8, 10, 6, 8, 7, 6],
        },
        {
          name: 'Reprovados',
          data: [3, 4, 2, 3, 2, 1],
        },
      ]
    : [
        {
          name: 'Aprovados',
          data: [2, 3, 4, 3, 5, 6],
        },
        {
          name: 'Pendentes',
          data: [1, 2, 1, 2, 1, 2],
        },
        {
          name: 'Reprovados',
          data: [1, 0, 1, 0, 1, 0],
        },
      ];

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    },
    yaxis: {
      title: {
        text: 'Quantidade',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " OKRs";
        },
      },
    },
    colors: ['#22C55E', '#F59E0B', '#EF4444'],
    legend: {
      position: 'top',
    },
  };

  return (
    <div className="w-full h-80">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading chart...</div>}>
        <Chart
          options={options}
          series={series}
          type="bar"
          height="100%"
          width="100%"
        />
      </Suspense>
    </div>
  );
};

export default OKRStatusChart;