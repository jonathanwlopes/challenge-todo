const Element = (props) => {
  if (!props) return false
  const _element = document.createElement(props.elementType)

  if (props.children) props.children.forEach(children => _element.appendChild(children))
  if (props.text) _element.textContent = props.text
  if (props.classList) _element.classList.add(...props.classList)
  if (props.inner) _element.innerHTML = props.inner
  if (props.value) _element.value = props.value

  return _element
}

export default Element