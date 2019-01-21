export default class ImageHandler {
  private bookImageInput = document.getElementById('BookImage_Input');
  private patternImageInput = document.getElementById('PatternImage_Input');

  private bookImageResult = document.getElementById('Uploaded_BookImage');
  private patternImageResult = document.getElementById('Uploaded_PatternImage');

  constructor() {
    this.bookImageInput.addEventListener('change', (e: Event) => {
      if (this.bookImageResult instanceof HTMLImageElement) {
        this.afterBookImageInputChange(e, this.bookImageResult);
      }
    });
    this.patternImageInput.addEventListener('change', (e: Event) => {
      if (this.patternImageResult instanceof HTMLImageElement) {
        this.afterBookImageInputChange(e, this.patternImageResult);
      }
    });
  }

  afterBookImageInputChange(e: Event, target: HTMLImageElement) {
    const reader: FileReader = new FileReader();
    if (e.currentTarget instanceof HTMLInputElement) {
      const imageFile = e.currentTarget.files[0];
      reader.onloadend = () => {
        target.src = `${reader.result}`;
      };

      if (imageFile) {
        reader.readAsDataURL(imageFile);
      } else {
        target.src = "";
      }
    }
  }
}