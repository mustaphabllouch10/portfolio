import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Unexpected error</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Something went wrong.</h2>
          <p className="mt-3 max-w-md text-slate-400">Please refresh the page and try again.</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
