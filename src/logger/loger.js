/**
* Created by nghinv on Thu Apr 11 2019
* Copyright (c) 2019 nghinv@luci.vn
*/

import printBuffer from "./core";
import defaults from './defaults';

export function logger(logBuffer, options = {}) {
  const loggerOptions = Object.assign({}, defaults, options);

  const {
    logger,
    stateTransformer,
    errorTransformer,
    predicate,
    logErrors,
    diffPredicate,
  } = loggerOptions;

  const diff = loggerOptions.diff && typeof diffPredicate === 'function'
    ? diffPredicate(getState, action)
    : loggerOptions.diff;

  printBuffer(logBuffer, Object.assign({}, loggerOptions, { diff }));
}
