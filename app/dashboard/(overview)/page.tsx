import { Card } from '@/app/ui/dashboard/cards';
import CardWrapper from '@/app/ui/dashboard/cards';
import IncomeChart from '@/app/ui/dashboard/income-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { poppins } from '@/app/ui/fonts';
// import {
//   // fetchIncome,
//   // fetchLatestInvoices,
//   // fetchCardData,
// } from '@/app/lib/data';
import { Suspense } from 'react';
import {
  IncomeChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  // const income = await fetchIncome();
  // const latestInvoices = await fetchLatestInvoices();
  // const {
  //   totalFulfilledInvoices,
  //   totalAwaitingInvoices,
  //   numberOfInvoices,
  //   numberOfSellers,
  // } = await fetchCardData();
  return (
    <main className="rounded-xl bg-neutral-900 p-6">
      <h1
        className={`${poppins.className} mb-4 text-center text-xl text-white md:text-3xl`}
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* <Card title="Earned" value={totalFulfilledInvoices} type="earned" />
        <Card
          title="In Progress"
          value={totalAwaitingInvoices}
          type="awaiting"
        />
        <Card title="All Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Sellers" value={numberOfSellers} type="sellers" /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<IncomeChartSkeleton />}>
          <IncomeChart />
        </Suspense>
        {/* <IncomeChart         income={income}         /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
