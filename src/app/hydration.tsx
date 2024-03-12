'use client'; // (a)

import * as React from 'react';
import useUserIdStore from '@/stores/auth';

const Hydration = () => {
  React.useEffect(() => {
    useUserIdStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;
