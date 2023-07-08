import { BillboardClient } from '@/components/billboard-client';
import React from 'react';

const BillboardsPage = () => {
  return (
    <div className='flel-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
