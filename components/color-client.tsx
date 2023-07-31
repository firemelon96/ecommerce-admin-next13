'use client';

import { Plus } from 'lucide-react';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { ColorColumn, columns } from '@/components/color-columns';
import { ApiList } from '@/components/ui/api-list';

interface ColorClientProps {
  data: ColorColumn[];
}

export const ColorClient = ({ data }: ColorClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Colors (${data.length})`}
          description='Manage color for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title='API' description='API calls for color' />
      <Separator />
      <ApiList entityName='colors' entityIdName='colorId' />
    </>
  );
};
