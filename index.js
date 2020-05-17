import vsbl from 'vsbl'

export default function mela ({
  reset = false,
  threshold = 0,
  className="mela-animate",
  visibleClass = "mela-is-visible"
}) {
  let cache = new Map()

  return function init () {
    cache.forEach((listener, node, map) => {
      !document.documentElement.contains(node) && cache.delete(node)
    })

    const nodes = document.querySelectorAll('.' + className)

    for (let i = nodes.length - 1; i > -1; i--) {
      if (cache.has(nodes[i])) continue

      const res = reset;

      const scroller = vsbl(nodes[i], { threshold: threshold || 0 })(() => {
        nodes[i].classList.add(visibleClass)
        !res && cache.delete(nodes[i])
      }, () => {
        res && nodes[i].classList.remove(visibleClass)
      })

      scroller.update()

      cache.set(
        nodes[i],
        scroller
      )
    }

    return function stop () {
      cache.forEach(scroller => scroller.destroy())
      cache.clear()
    }
  }
}
