module.exports = function override(config, env) {
  // Find the rule that contains @svgr/webpack
  const svgRuleIndex = config.module.rules.findIndex(rule =>
    rule.oneOf &&
    rule.oneOf.some(oneOfRule => oneOfRule.loader && oneOfRule.loader.includes('@svgr/webpack'))
  );

  if (svgRuleIndex !== -1) {
    const svgRule = config.module.rules[svgRuleIndex].oneOf.find(oneOfRule =>
      oneOfRule.loader && oneOfRule.loader.includes('@svgr/webpack')
    );

    if (svgRule) {
      // Add or update the options for @svgr/webpack
      svgRule.options = {
        ...svgRule.options,
        throwIfNamespace: false,
      };
    }
  }

  return config;
};
