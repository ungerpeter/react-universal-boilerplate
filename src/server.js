import React from 'react';

const serverRenderer = () => (req, res) => {
  res.status(200).send("test");
};

export default serverRenderer;
