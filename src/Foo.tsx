import React from "react";

interface FooProps {
  bar: string;
  children: React.ReactNode;
}

const Foo = (props: FooProps) => {
  const { bar, children } = props;
  return (
    <div>
      <span>{bar}</span>
      {children}
    </div>
  );
};
export default Foo;
