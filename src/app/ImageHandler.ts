export default class ImageHandler {
  private bookImageInput = document.getElementById('BookImage_Input');
  private patternImageInput = document.getElementById('PatternImage_Input');

  private combineCanvas = document.getElementById('CombineCanvas');
  private combineCanvasContext?: CanvasRenderingContext2D;

  constructor() {
    this.bookImageInput.addEventListener('change', (e: Event) => {
      this.afterBookImageInputChange(e);
    });
    this.patternImageInput.addEventListener('change', (e: Event) => {
        this.afterBookImageInputChange(e);
    });
    if (this.combineCanvas instanceof HTMLCanvasElement) {
      this.combineCanvasContext = this.combineCanvas.getContext('2d');
    }
  }

  afterBookImageInputChange(e: Event) {
    const reader: FileReader = new FileReader();
    if (e.currentTarget instanceof HTMLInputElement) {
      const imageFile = e.currentTarget.files[0];
      reader.onloadend = () => {

        const imageSrc = reader.result;
        const newImageObj = new Image();

        newImageObj.src = `${imageSrc}`;
        newImageObj.onload = () => {
          this.combineCanvasContext.drawImage(newImageObj, 0, 0);
        }
      };

      if (imageFile) {
        reader.readAsDataURL(imageFile);
      }
    }
  }
}