import {Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angularVersion = VERSION.full;
  ngxMarkdownVersion = '11.0.0';

  markdown = `
    ## Markdown __rulez__!
    ---

    ### Syntax highlight
    \`\`\`typescript
    const language = 'typescript';
    \`\`\`

    ### Lists
    1. Ordered list
    2. Another bullet point
      - Unordered list
      - Another unordered bullet point

    ### Blockquote
    > Blockquote to the max
  `;
}
