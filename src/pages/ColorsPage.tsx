import {
  AnimatedContainer,
  AnimatedItem,
  PageTransition,
} from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface Color {
  name: string;
  value: string;
  description: string;
  variable: string;
}

interface Gradient {
  name: string;
  value: string;
  css: string;
  description: string;
}

export default function ColorsPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const primaryColors = [
    {
      name: "Forest Deep",
      value: "#232A2E",
      description: "The deepest forest background",
      variable: "--color-forest-deep",
    },
    {
      name: "Pine Dark",
      value: "#2D353B",
      description: "Secondary dark backgrounds",
      variable: "--color-pine-dark",
    },
    {
      name: "Forest Mid",
      value: "#343F44",
      description: "Medium tone for cards and sections",
      variable: "--color-forest-mid",
    },
    {
      name: "Sage",
      value: "#3D484D",
      description: "Lighter neutral for interactive elements",
      variable: "--color-sage",
    },
  ];

  const accentColors = [
    {
      name: "Snow",
      value: "#D3C6AA",
      description: "Primary text color, warm cream",
      variable: "--color-snow",
    },
    {
      name: "Mist",
      value: "#A7C080",
      description: "Secondary text, soft sage green",
      variable: "--color-mist",
    },
    {
      name: "Spring",
      value: "#83C092",
      description: "Green accent for links and highlights",
      variable: "--color-spring",
    },
    {
      name: "Bloom",
      value: "#E67E80",
      description: "Coral accent for special elements",
      variable: "--color-bloom",
    },
  ];

  const neutralColors = [
    {
      name: "Stone",
      value: "#4F585E",
      description: "Dark gray for borders and dividers",
      variable: "--color-stone",
    },
    {
      name: "Bark",
      value: "#859289",
      description: "Medium gray for secondary text",
      variable: "--color-bark",
    },
    {
      name: "Moss",
      value: "#9DA9A0",
      description: "Light gray for subtle text",
      variable: "--color-moss",
    },
    {
      name: "Fog",
      value: "#C5CDD0",
      description: "Very light gray for backgrounds",
      variable: "--color-fog",
    },
  ];

  const functionalColors = [
    {
      name: "Success",
      value: "#A7C080",
      description: "Forest green for success states",
      variable: "--color-success",
    },
    {
      name: "Warning",
      value: "#DBBC7F",
      description: "Golden amber for warnings",
      variable: "--color-warning",
    },
    {
      name: "Error",
      value: "#E67E80",
      description: "Coral red for errors",
      variable: "--color-error",
    },
  ];

  const gradients = [
    {
      name: "Forest Gradient",
      value: "linear-gradient(135deg, #232A2E 0%, #2D353B 50%, #343F44 100%)",
      css: "bg-forest-gradient",
      description: "Primary background gradient",
    },
    {
      name: "Spring Gradient",
      value: "linear-gradient(135deg, #83C092 0%, #A7C080 100%)",
      css: "bg-spring-gradient",
      description: "Green accent gradient",
    },
    {
      name: "Mist Gradient",
      value: "linear-gradient(135deg, #D3C6AA 0%, #A7C080 100%)",
      css: "bg-mist-gradient",
      description: "Text highlight gradient",
    },
  ];

  const ColorCard = ({
    color,
    showVariable = false,
  }: {
    color: Color;
    showVariable?: boolean;
  }) => (
    <Card className="p-4 bg-pine-dark border-forest-mid hover:border-spring transition-all duration-300 group hover:shadow-lg hover:shadow-spring/10">
      <div className="space-y-3">
        <div
          className="w-full h-20 rounded-lg border border-stone/30 cursor-pointer group-hover:scale-105 transition-all duration-300 relative overflow-hidden"
          style={{ backgroundColor: color.value }}
          onClick={() => copyToClipboard(color.name, color.value)}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Copy indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/20 backdrop-blur-sm rounded-full p-2">
              <Copy className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-title font-semibold text-snow group-hover:text-spring transition-colors">
              {color.name}
            </h3>
            <button
              onClick={() => copyToClipboard(color.name, color.value)}
              className="p-1 rounded text-mist hover:text-spring transition-colors hover:bg-forest-mid/50"
              title="Copy color value"
            >
              {copiedColor === color.name ? (
                <Check className="w-4 h-4 text-spring" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-sm text-mist leading-relaxed">
            {color.description}
          </p>
          <div className="space-y-2">
            <Badge
              variant="secondary"
              className="bg-forest-mid text-snow border-stone font-mono text-xs hover:bg-forest-mid/80 transition-colors cursor-pointer"
              onClick={() => copyToClipboard(color.name + "-hex", color.value)}
            >
              {color.value}
            </Badge>
            {showVariable && (
              <Badge
                variant="outline"
                className="border-spring text-spring font-mono text-xs hover:bg-spring/10 transition-colors cursor-pointer"
                onClick={() =>
                  copyToClipboard(color.name + "-css", color.variable)
                }
              >
                {color.variable}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );

  const GradientCard = ({ gradient }: { gradient: Gradient }) => (
    <Card className="p-4 bg-pine-dark border-forest-mid hover:border-spring transition-all duration-200 group">
      <div className="space-y-3">
        <div
          className="w-full h-16 rounded-lg border border-stone/30 cursor-pointer group-hover:scale-105 transition-transform"
          style={{ background: gradient.value }}
          onClick={() => copyToClipboard(gradient.name, gradient.value)}
        />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-title font-semibold text-snow">
              {gradient.name}
            </h3>
            <button
              onClick={() => copyToClipboard(gradient.name, gradient.value)}
              className="p-1 rounded text-mist hover:text-spring transition-colors"
              title="Copy gradient value"
            >
              {copiedColor === gradient.name ? (
                <Check className="w-4 h-4 text-spring" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-sm text-mist">{gradient.description}</p>
          <div className="space-y-1">
            <Badge
              variant="secondary"
              className="bg-forest-mid text-snow border-stone font-mono text-xs"
            >
              {gradient.css}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <PageTransition>
      <div className="space-y-8">
        <AnimatedContainer>
          <AnimatedItem>
            <div className="text-center space-y-6">
              <h1 className="font-title text-4xl font-bold text-snow drop-shadow-lg">
                Everforest Color Palette
              </h1>
              <p className="text-lg text-mist max-w-3xl mx-auto leading-relaxed">
                Explore the nature-inspired color system that brings this
                portfolio to life. Each color is thoughtfully chosen to create
                warmth, accessibility, and visual harmony reminiscent of a
                tranquil forest landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <Badge className="bg-spring text-forest-deep">
                  WCAG AA Compliant
                </Badge>
                <Badge variant="outline" className="border-mist text-mist">
                  Nature Inspired
                </Badge>
                <Badge variant="outline" className="border-bloom text-bloom">
                  Modern Design
                </Badge>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedContainer>

        <AnimatedContainer>
          {/* Color Inspiration */}
          <AnimatedItem>
            <Card className="p-6 bg-pine-dark border-forest-mid">
              <h2 className="font-title text-xl font-semibold text-snow mb-4">
                Design Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-title text-lg font-medium text-spring mb-2">
                    Nature-Inspired
                  </h3>
                  <p className="text-mist text-sm">
                    This palette draws inspiration from the tranquility and
                    vitality of a lush forest, evoking the serene beauty of
                    evergreen landscapes while maintaining modern web
                    accessibility standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-title text-lg font-medium text-spring mb-2">
                    Warm & Accessible
                  </h3>
                  <p className="text-mist text-sm">
                    All color combinations meet WCAG AA standards for contrast,
                    ensuring excellent readability while providing a warm,
                    inviting atmosphere that feels both professional and
                    approachable.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedItem>
        </AnimatedContainer>

        <AnimatedContainer>
          {/* Primary Colors - Forest Foundation */}
          <AnimatedItem>
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-2xl font-semibold text-snow mb-2">
                  Primary Colors
                </h2>
                <p className="text-mist">
                  Forest foundation colors that form the base of the design
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {primaryColors.map((color) => (
                  <ColorCard key={color.name} color={color} showVariable />
                ))}
              </div>
            </div>
          </AnimatedItem>

          {/* Accent Colors */}
          <AnimatedItem>
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-2xl font-semibold text-snow mb-2">
                  Accent Colors
                </h2>
                <p className="text-mist">
                  Nature highlights that add life and personality
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {accentColors.map((color) => (
                  <ColorCard key={color.name} color={color} showVariable />
                ))}
              </div>
            </div>
          </AnimatedItem>

          {/* Neutral Colors */}
          <AnimatedItem>
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-2xl font-semibold text-snow mb-2">
                  Neutral Colors
                </h2>
                <p className="text-mist">
                  Natural grays with warm undertones for functional elements
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {neutralColors.map((color) => (
                  <ColorCard key={color.name} color={color} showVariable />
                ))}
              </div>
            </div>

            {/* Functional Colors */}
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-2xl font-semibold text-snow mb-2">
                  Functional Colors
                </h2>
                <p className="text-mist">
                  Status and feedback colors with nature theming
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {functionalColors.map((color) => (
                  <ColorCard key={color.name} color={color} showVariable />
                ))}
              </div>
            </div>
          </AnimatedItem>

          {/* Gradients */}
          <AnimatedItem>
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-2xl font-semibold text-snow mb-2">
                  Gradients
                </h2>
                <p className="text-mist">
                  Beautiful gradients that add depth and visual interest
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gradients.map((gradient) => (
                  <GradientCard key={gradient.name} gradient={gradient} />
                ))}
              </div>
            </div>
          </AnimatedItem>

          {/* Color Harmonies */}
          <AnimatedItem>
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-2xl font-semibold text-snow mb-2">
                  Color Harmonies
                </h2>
                <p className="text-mist">
                  Complementary color combinations used throughout the design
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Active States */}
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="font-title text-lg font-semibold text-snow mb-4">
                    Active Elements
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-gradient-to-r from-spring to-mist"></div>
                      <span className="text-mist text-sm">
                        Spring → Mist gradient
                      </span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-spring to-mist text-forest-deep rounded-lg nav-glow">
                      <span className="font-medium">
                        Active navigation item
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Hover States */}
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="font-title text-lg font-semibold text-snow mb-4">
                    Hover States
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "#3D484D" }}
                      ></div>
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "#83C092" }}
                      ></div>
                      <span className="text-mist text-sm">Sage → Spring</span>
                    </div>
                    <div className="p-3 bg-forest-mid hover:bg-sage text-mist hover:text-spring rounded-lg transition-colors cursor-pointer">
                      <span>Hover over me</span>
                    </div>
                  </div>
                </Card>

                {/* Text Hierarchies */}
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="font-title text-lg font-semibold text-snow mb-4">
                    Text Hierarchy
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "#D3C6AA" }}
                      ></div>
                      <span className="text-xs text-mist">Primary (Snow)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "#A7C080" }}
                      ></div>
                      <span className="text-xs text-mist">
                        Secondary (Mist)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "#9DA9A0" }}
                      ></div>
                      <span className="text-xs text-mist">Tertiary (Moss)</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Live Preview Section */}
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-2xl font-semibold text-snow mb-2">
                  Live Preview
                </h2>
                <p className="text-mist">
                  Interactive examples showing the color palette in action
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sidebar Preview */}
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="font-title text-lg font-semibold text-snow mb-4">
                    Sidebar Navigation
                  </h3>
                  <div className="bg-pine-dark border border-forest-mid rounded-lg p-4 space-y-2">
                    <div className="flex items-center space-x-3 p-2 bg-gradient-to-r from-spring to-mist text-forest-deep rounded-lg nav-glow">
                      <div className="w-4 h-4 bg-forest-deep rounded"></div>
                      <span className="text-sm font-medium">Active Page</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 text-mist hover:bg-forest-mid/60 hover:text-snow rounded-lg transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-mist rounded"></div>
                      <span className="text-sm">Inactive Page</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 text-mist hover:bg-forest-mid/60 hover:text-snow rounded-lg transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-mist rounded"></div>
                      <span className="text-sm">Another Page</span>
                    </div>
                  </div>
                </Card>

                {/* Card Preview */}
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="font-title text-lg font-semibold text-snow mb-4">
                    Content Cards
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-forest-mid border border-stone rounded-lg hover:border-spring transition-colors cursor-pointer">
                      <h4 className="font-title text-snow font-medium mb-2">
                        Card Title
                      </h4>
                      <p className="text-mist text-sm mb-3">
                        This is how content cards look with our color palette.
                      </p>
                      <div className="flex space-x-2">
                        <Badge className="bg-spring text-forest-deep">
                          Primary Tag
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-mist text-mist"
                        >
                          Secondary Tag
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Usage Examples */}
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-2xl font-semibold text-snow mb-2">
                  Usage Examples
                </h2>
                <p className="text-mist">
                  See how these colors work together in practice
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Button Examples */}
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="text-lg font-semibold text-snow mb-4">
                    Button Styles
                  </h3>
                  <div className="space-y-3">
                    <Button variant="theme" className="w-full">
                      Primary Button
                    </Button>
                    <Button variant="theme-outline" className="w-full">
                      Secondary Button
                    </Button>
                    <Button variant="default" className="w-full">
                      Neutral Button
                    </Button>
                  </div>
                </Card>

                {/* Text Examples */}
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="text-lg font-semibold text-snow mb-4">
                    Typography
                  </h3>
                  <div className="space-y-2">
                    <p className="text-snow font-semibold">
                      Primary text (Snow)
                    </p>
                    <p className="text-mist">Secondary text (Mist)</p>
                    <p className="text-moss text-sm">Subtle text (Moss)</p>
                    <a
                      href="#"
                      className="text-spring hover:text-bloom transition-colors"
                    >
                      Link text (Spring → Bloom)
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            {/* Accessibility Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-snow mb-2">
                  Accessibility
                </h2>
                <p className="text-mist">
                  All color combinations meet WCAG accessibility standards
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="text-lg font-semibold text-snow mb-4">
                    Contrast Ratios
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-forest-deep rounded">
                      <span className="text-snow">Snow on Forest Deep</span>
                      <Badge className="bg-spring text-forest-deep">AAA</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-forest-mid rounded">
                      <span className="text-mist">Mist on Forest Mid</span>
                      <Badge className="bg-spring text-forest-deep">AA</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-spring rounded">
                      <span className="text-forest-deep">
                        Forest Deep on Spring
                      </span>
                      <Badge className="bg-spring text-forest-deep">AAA</Badge>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-pine-dark border-forest-mid">
                  <h3 className="text-lg font-semibold text-snow mb-4">
                    Design Principles
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-spring rounded-full mt-1.5"></div>
                      <span className="text-mist">
                        High contrast between text and backgrounds
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-spring rounded-full mt-1.5"></div>
                      <span className="text-mist">
                        Color is never the only way to convey information
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-spring rounded-full mt-1.5"></div>
                      <span className="text-mist">
                        Interactive elements have clear focus states
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-spring rounded-full mt-1.5"></div>
                      <span className="text-mist">
                        Warm tones reduce eye strain
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedContainer>
      </div>
    </PageTransition>
  );
}
