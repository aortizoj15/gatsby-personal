import React from 'react';
import Typed from 'react-typed';

const AutoTypeHome = () => (
  <div className="home__typing">
    <h1>
      Hello! My name is Alexis Ortiz Ojeda, and I'm a&nbsp;
      <Typed
        strings={[
          'Developer.',
          'Husband.',
          'Writer.',
          'Coder.',
          'Reader.',
          'Producer.',
          'Learner.',
        ]}
        typeSpeed={90}
        backSpeed={110}
        backDelay={1000}
        loop
      />
    </h1>{' '}
  </div>
);

export default AutoTypeHome;
