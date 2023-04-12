import React from "react";

type State = {hasError: boolean};
export default class ErrorBoom extends React.Component <{children: React.ReactNode , fallback: React.ReactNode}>{
state: State = {hasError: false};

static getDerivedStateFromError(error: Error): State{
    return {hasError: true};
}
render() {
    if (this.state.hasError){
      return this.props.fallback;
    }
    return this.props.children;
  }

}