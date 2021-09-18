import React from "react";

const TransContext = React.createContext(null);

const withTrans = Component => props => {
  return <TransContext.Consumer>
    {t => <Component {...props} t={t} />}
  </TransContext.Consumer>
}

export {withTrans, TransContext};