import {
  FloatingArrow,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getContrast } from '../../utils';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import Configuration from './Configuration';
import { NeuElementContext } from './context/NeuElementContext';

const ARROW_HEIGHT = 10;
const ARROW_WIDTH = 16;
const GAP = 0;

const eventClose = new CustomEvent('closeNeu', {
  bubbles: true,
});

const NeuTooltipTool = ({ refElement, setRefProps, onClick }) => {
  const {
    ctrlButton,
    styles: { mainColor },
  } = useContext(NeumorphicStylesContext);
  const {
    contextConfig: { color },
  } = useContext(NeuElementContext);
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { x, y, strategy, refs, context } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'bottom',
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(ARROW_HEIGHT + GAP),
      flip(),
      shift(),
    ],
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([useDismiss(context)]);

  const closeTooltip = useCallback((e) => {
    if (e.target !== e.currentTarget) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (refElement === null) return;
    refElement.addEventListener('closeNeu', closeTooltip);
    return () => refElement.removeEventListener('closeNeu', closeTooltip);
  }, [refElement, closeTooltip]);

  const display = useMemo(() => {
    if (refElement === null) return;
    const computedStyle = window.getComputedStyle(refElement);
    const position = computedStyle.getPropertyValue('position');
    return position === 'fixed' ? { zIndex: 10000 } : {};
  }, [refElement]);

  useEffect(() => {
    setRefProps({
      ...getReferenceProps({
        onClick(e) {
          const closest = e.target.closest('.neuElement');
          if (closest == e.currentTarget) {
            setIsOpen((prev) => {
              if (!ctrlButton) {
                return !prev;
              }
              if (e.ctrlKey) {
                return !prev;
              }
              return false;
            });
            e.currentTarget.dispatchEvent(eventClose);
          }
          if (onClick) onClick(e);
        },
      }),
    });
  }, [getReferenceProps, setRefProps]);

  useLayoutEffect(() => {
    refs.setReference(refElement);
  }, [refs, refElement]);

  return (
    <>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            ...{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: 'max-content',
            },
            ...display,
          }}
          {...getFloatingProps({
            onClick(e) {
              e.stopPropagation();
            },
          })}
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            width={ARROW_WIDTH}
            height={ARROW_HEIGHT}
            fill={getContrast(color || mainColor)}
            tipRadius={2}
          />
          <Configuration />
        </div>
      )}
    </>
  );
};

export default NeuTooltipTool;
