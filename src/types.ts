export interface DemoContent {
  title: string;
  subtitle: string;
  colorTheme: 'cyan' | 'emerald' | 'violet' | 'amber';
  layoutType: 'landing' | 'catalog' | 'corporate';
  features: string[];
  mockStats?: { label: string; value: string }[];
  accentColor: string;
}

export interface ProjectPackage {
  id: string;
  name: string;
  target: string;
  priceOriginal?: number;
  pricePromo: number;
  discountBadge: string;
  features: string[];
  imageUrl: string;
  whatsAppName: string;
  demoUrl: string;
  demoContent: DemoContent;
  isPopular?: boolean;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface GuaranteeItem {
  title: string;
  badge: string;
  description: string;
  iconName: string;
}
