import { useEffect, useState } from 'react';
import { useIsMount } from 'src/hooks/useIsMount';

// component
import { CreditCard } from './CreditCard';

// types
import type { IActionProps } from 'src/types/types.hooks';
import { ECardState, ICreditCardProps, TCardState } from './CreditCard.types';

export const CreditCardExample = ({
  onAction,
  ...props
}: IActionProps<TCardState> & ICreditCardProps) => {
  const { expiryYear, expiryMonth } = props;

  // states
  const [state, setState] = useState<TCardState>(ECardState.idle);
  const isMount = useIsMount();

  // consts
  const expiryDate = new Date(expiryYear, expiryMonth, 1).getTime();

  // listeners
  const onClick = () => {
    const { idle, active } = ECardState;
    setState(state === idle ? active : idle);
  };

  // callback
  useEffect(() => {
    if (!isMount) onAction?.(state);
  }, [state]);

  // checks
  if (state !== 'expired' && expiryDate < Date.now()) {
    setState('expired');
  }

  return <CreditCard onClick={onClick} {...props} />;
};
