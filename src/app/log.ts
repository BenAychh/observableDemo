import { Component } from '@angular/core';
export function log(this: CodeComponent, number, text, color?) {
  let formattedText = text;
  if (color) {
    formattedText = `<span class="${color}">${text}</span>`;
  }
  switch (number) {
    case 1: return this.column1 = `${this.column1}\n${formattedText}`;
    case 2: return this.column2 = `${this.column2}\n${formattedText}`;
    case 3: return this.column3 = `${this.column3}\n${formattedText}`;
  }
}

interface CodeComponent extends Component {
  column1: string;
  column2: string;
  column3: string;
}
