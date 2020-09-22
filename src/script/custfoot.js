class CustFoot extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <footer class="footer py-3" style="background-color: #f5f5f5;">
            <div class="container">
                <span class="text-muted">with &hearts; by Sepryan</span>
            </div>
        </footer>
        `
  }
}

customElements.define('cust-foot', CustFoot)
