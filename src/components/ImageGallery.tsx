import React, { useState, useEffect, useRef } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "https://webseitendetmold.blob.core.windows.net/vanessatier/d4457626-9bcf-4529-b248-5032b21d1c7c.JPG",
    alt: "Erstgespräch und Anamnese",
    title: "",
    description: "Über Stangen zu laufen fördert die Koordination und den Gleichgewichtssinn. Alternativ setze ich Koordinationsübungen auf einem Balanceboard um."
  },
  {
    src: "/IMG_6699.jpg",
    alt: "Untersuchung des Hundes",
    title: "",
    description: "Blutegel am Pferd. Die in ihrem Speichel enthaltenen biologisch aktiven Substanzen sind blutverdünnend, schmerzlindernd und entzündungshemmend, was sich effektiv bei Arthrose herausgestellt hat. Auch Blutohren beim Hund lassen sich mit Blutegeln ganz hervorragend behandeln."
  },
  {
    src: "https://webseitendetmold.blob.core.windows.net/vanessatier/IMG_8431.jpg",
    alt: "Physiotherapeutische Behandlung",
    title: "",
    description: "Durch den Druck des Balls können Verspannungen gelöst und die Durchblutung angeregt werden."
  },
  {
    src: "https://webseitendetmold.blob.core.windows.net/vanessatier/IMG_8345.jpg",
    alt: "Therapiefortschritt",
    title: "",
    description: "Die Magnetfeldtherapie ist ein naturheilkundliches Behandlungsverfahren. Dabei werden Magneten oder elektrisch erzeugte Magnetfelder unter anderem dazu eingesetzt, Entzündungen zu hemmen, Schmerzen zu lindern oder die Heilung zu unterstützen."
  },
  {
    src: "https://webseitendetmold.blob.core.windows.net/vanessatier/IMG_8424.jpg",
    alt: "Erfolgreiche Behandlung",
    title: "",
    description: "Mit Hilfe eines TENS-Gerätes werden elektrische Impulse erzeugt und von Elektroden durch die Haut auf das Nervensystem übertragen. Diese Impulse bewirken je nach Frequenz eine Art 'Gegenirritation' im Gehirn oder die Ausschüttung körpereigener schmerzstillender Substanzen und erreichen somit eine Schmerzlinderung."
  }
];

const ImageGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [animatedImages, setAnimatedImages] = useState<number[]>([]);

  useEffect(() => {
    if (!galleryRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animating images one after another
          let delay = 0;
          const imagesArray: number[] = [];
          
          images.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedImages(prev => [...prev, index]);
            }, delay);
            delay += 150;
            imagesArray.push(index);
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(galleryRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mt-16" ref={galleryRef}>
      <h3 className="text-2xl font-semibold mb-8 text-center">Bildergalerie</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl 
                      ${animatedImages.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                      aspect-w-4 aspect-h-3`}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="font-semibold mb-1">{image.title}</h4>
              <p className="text-sm opacity-90">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images}
      />
    </div>
  );
};

export default ImageGallery;