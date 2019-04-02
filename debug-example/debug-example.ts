import { css, customElement, html, LitElement} from 'lit-element';
import '@polymer/paper-styles/typography.js';
import '@polymer/paper-button';
import '@polymer/paper-card/paper-card.js';

@customElement('typescript-debug')
export class TSDebug extends LitElement {
  static styles = css`
    .page-wrapper {
      width: 500px;
      margin-left: auto;
      margin-right: auto;
      @apply --paper-font-headline;
    }
    .button-wrapper {
      margin-top: 30px;
    }
  `;

  debugFunction(): void {
    console.log('Here is a console log.')
    console.warn('Here is a warning statement');
    console.error('Here is an error statement');
    console.log('Check your sources, you should be debugging Typescript');
    debugger;
    let a = 2;
    let b = 8;
    let res = a*b;
    console.log('Result :', res);
  }

  render() {
    return html`
      <div class="page-wrapper">
        <paper-card heading="Typescript debug">
          <div class="card-content">
            Test page to run debugger for Typescript <br/>
            <span> Please open your DevTools </span>
          </div>
          <div class="card-actions">
            <paper-button @click="${this.debugFunction}"> LAUNCH THE DEBUGGER </paper-button>
          </div>
        </paper-card>
      </div>
    `;
  }
}