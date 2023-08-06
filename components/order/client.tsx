'use client';

import React from 'react';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { OrderColumn, columns } from './columns';

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description='Manage Orders for your store'
      />
      <Separator />
      <DataTable searchKey='products' columns={columns} data={data} />
    </>
  );
};
