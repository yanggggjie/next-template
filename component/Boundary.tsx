import _ from 'lodash'
import { clsx } from 'clsx'
import { ErrorBoundary } from 'react-error-boundary'
import { isValidElement, ReactNode, Suspense } from 'react'
interface Props {
  suspenseFallback?: ReactNode
  errorFallback?: ReactNode
  children: ReactNode
}

export default function Boundary({
  suspenseFallback,
  errorFallback,
  children,
}: Props) {
  let childrenName = ''

  if (isValidElement(children)) {
    // @ts-ignore
    childrenName = children.type.name || 'Unknown Component'
  }

  return (
    <ErrorBoundary
      // @ts-ignore
      fallback={errorFallback || <div>{childrenName} error</div>}
    >
      <Suspense
        fallback={suspenseFallback || <div>{childrenName} loading</div>}
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}
