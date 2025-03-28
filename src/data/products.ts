import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Présentation Professionnelle',
    description: 'Des présentations impactantes pour vos réunions et conférences.',
    price: 49,
    category: 'Présentation',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  },
  {
    id: '2',
    name: 'Rapport Détaillé',
    description: 'Des rapports structurés et professionnels pour vos projets.',
    price: 79,
    category: 'Rapport',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  },
  {
    id: '3',
    name: 'Documentation Technique',
    description: 'Documentation technique et guides utilisateur détaillés.',
    price: 99,
    category: 'Documentation',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  },
  {
    id: '4',
    name: 'Projet de Fin d\'Études',
    description: 'Accompagnement complet pour votre PFE.',
    price: 199,
    category: 'PFE',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  },
  {
    id: '5',
    name: 'Social Media Pack',
    description: 'Contenu engageant pour vos réseaux sociaux.',
    price: 39,
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  },
];