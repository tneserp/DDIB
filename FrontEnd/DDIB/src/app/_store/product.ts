import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OrderAddressInfo, OrderProduct } from "@/app/_types/types";

interface Amount {
  amount: number;
  increaseAmount: () => void;
  decreaseAmount: () => void;
  setAmount: (num: number) => void;
}

export const amountStore = create<Amount>((set) => ({
  amount: 1,
  increaseAmount: () => set((state) => ({ amount: state.amount + 1 })),
  decreaseAmount: () => set((state) => ({ amount: state.amount - 1 })),
  setAmount: (num) => set(() => ({ amount: num })),
}));

interface OrderProducts {
  orderInfo: OrderProduct;
  setOrderInfo: (info: OrderProduct) => void;
}

export const orderStore = create(
  persist<OrderProducts>(
    (set, get) => ({
      orderInfo: {},
      setOrderInfo: (info) => set(() => ({ orderInfo: info })),
    }),
    {
      name: "orderStorage",
    }
  )
);

interface OrderAddress {
  addressInfo: OrderAddressInfo;
  setOrderAddressInfo: (info: OrderAddressInfo) => void;
}

export const orderAddressStore = create(
  persist<OrderAddress>(
    (set, get) => ({
      addressInfo: {},
      setOrderAddressInfo: (info) => set(() => ({ addressInfo: info })),
    }),
    {
      name: "orderAddressStorage",
    }
  )
);
