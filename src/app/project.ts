export class Project {
  id: number;
  name: string;
  company: string;
  image: string;
  description: string;
  rol: string;
  functionalities: string[];
  technologies: string;
  carousel: Carousel[];
}

class Carousel {
  title: string;
  image: string;
}
