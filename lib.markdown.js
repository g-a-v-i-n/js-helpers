// choo users
function parseMarkdown (md) {
  const html = marked(md)
  return bel`
    <div>
      ${raw(html)}
    </div>
  `
}
