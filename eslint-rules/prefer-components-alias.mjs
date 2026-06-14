const relativeImportPattern = /^\.{1,2}\//

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer the @/ alias for project-local imports.',
    },
    messages: {
      preferAlias: 'Use the @/ alias for project-local imports.',
    },
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (
          typeof node.source.value === 'string' &&
          relativeImportPattern.test(node.source.value)
        ) {
          context.report({
            node: node.source,
            messageId: 'preferAlias',
          })
        }
      },
    }
  },
}
