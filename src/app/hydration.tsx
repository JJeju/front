'use client';

import * as React from 'react';
import useUserIdStore from '@/stores/auth';
import { useEffect } from 'react';

const Hydration = () => {
  useEffect(() => {
    useUserIdStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;
