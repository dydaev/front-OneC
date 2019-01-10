import * as React from 'react';

export interface HelloProps {
  framework: string;
}

export const Hello = (props: HelloProps) => <h1>{props.framework}!</h1>;
