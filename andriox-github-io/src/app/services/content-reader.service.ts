import { Injectable } from '@angular/core';
import { ReadingMode } from '../sentence-highlighter.service';

@Injectable({
  providedIn: 'root'
})
export class ContentReaderService {

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
  characters: Character[];

  constructor(private condition: Function) {
    this.characters = [];
  }

  add(character: Character, readingMode: ReadingMode): boolean {
    if (this.condition(this.characters.length, character.getContent())) {
      return false;
    }
    this.characters.push(character);
    return true;
  }

  getCharacters(): Character[] {
    return this.characters;
  }

}
