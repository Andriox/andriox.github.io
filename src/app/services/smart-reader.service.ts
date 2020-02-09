import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartReaderService {

  constructor() { }
}


export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

export class Character {

  constructor(private content: string) {
  }

  getContent() {
    return this.content;
  }

}

export class Sentence {
  private maxCharsToDisplay = 86;
  characters: Character[];

  constructor() {
    this.characters = [];
  }

  add(character: Character): boolean {
    if (this.characters.length == this.maxCharsToDisplay) {
      return false;
    }
    this.characters.push(character);
    return true;
  }

  getCharacters(): Character[] {
    return this.characters;
  }

}
