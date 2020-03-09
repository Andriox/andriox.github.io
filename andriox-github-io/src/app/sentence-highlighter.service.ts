import { Injectable } from '@angular/core';
import { Sentence, Character } from './services/content-reader.service';
import { SmartReaderComponent } from './smart-reader/smart-reader.component';

export enum ReadingStatus {
  SETUP,
  READING,
  DONE
}

export enum ReadingMode {
  UNCOVER,
  HIGHLIGHTER
}

@Injectable({
  providedIn: 'root'
})
export class SentenceHighlighterService {

  condition: Function = (_maxCharacters: number, currentCharacter: string) => currentCharacter == '.';

  constructor() {
  }

  startReading(caller: SmartReaderComponent) {
    let chars = caller.contentToRead.split('');
    let sentence = new Sentence(this.condition);
    caller.sentences.push(sentence);
    chars.forEach(value => {
      let character = new Character(value);
      if (!sentence.add(character, caller.readingMode)) {
        sentence = new Sentence(this.condition);
        sentence.add(character, caller.readingMode);
        caller.sentences.push(sentence);
      }
    });
    caller.readingStatus = ReadingStatus.READING;
    this.displayLine(caller);
  }

  readAgain(caller: SmartReaderComponent) {
    caller.currentData = [];
    caller.readingStatus = ReadingStatus.READING;
    this.displayLine(caller);
  }

  readNew(caller: SmartReaderComponent) {
    caller.readingStatus = ReadingStatus.SETUP;
    caller.contentToRead = '';
    caller.currentData = [];
    caller.sentences = [];
  }

  displayLine(caller: SmartReaderComponent) {
    if (caller.currentIndex == caller.sentences.length - 1) {
      caller.readingStatus = ReadingStatus.DONE;
      caller.currentIndex = 0;
    } else {
      for (let index = 0; index < caller.sentences.length; index++) {
        let data = caller.sentences[index].characters.map((data) => data.getContent())
          .filter(dataContent => dataContent != ".")
          .reduce((accumulator: string, data: string) => {
            return accumulator + data;
          }, "");
        if (index == caller.currentIndex) {
          data = "<div class='current-sentence-highlight'>" + data + ".</div>"
        }
        caller.currentData[index] = data;
      }
    }
  }


}
