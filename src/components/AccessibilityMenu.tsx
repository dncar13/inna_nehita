import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Focus, 
  Keyboard,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  linkHighlight: boolean;
  keyboardNavigation: boolean;
}

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    linkHighlight: false,
    keyboardNavigation: false
  });

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}%`;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply link highlight
    if (newSettings.linkHighlight) {
      root.classList.add('highlight-links');
    } else {
      root.classList.remove('highlight-links');
    }
    
    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-nav');
    } else {
      root.classList.remove('keyboard-nav');
    }
  };

  const increaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.min(prev.fontSize + 10, 150)
    }));
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(prev.fontSize - 10, 80)
    }));
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  };

  const toggleLinkHighlight = () => {
    setSettings(prev => ({
      ...prev,
      linkHighlight: !prev.linkHighlight
    }));
  };

  const toggleKeyboardNavigation = () => {
    setSettings(prev => ({
      ...prev,
      keyboardNavigation: !prev.keyboardNavigation
    }));
  };

  const resetSettings = () => {
    const defaultSettings = {
      fontSize: 100,
      highContrast: false,
      linkHighlight: false,
      keyboardNavigation: false
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Accessibility Button */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-12 h-12 bg-primary hover:bg-primary-dark shadow-lg"
          aria-label="פתח תפריט נגישות"
          aria-expanded={isOpen}
        >
          <Settings className="w-6 h-6" />
        </Button>
      </div>

      {/* Accessibility Menu */}
      {isOpen && (
        <div className="fixed top-20 left-4 z-50 bg-card border border-border rounded-lg shadow-2xl p-4 w-80">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">אפשרויות נגישות</h2>
            
            {/* Font Size Controls */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">גודל טקסט</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  aria-label="הקטן טקסט"
                  disabled={settings.fontSize <= 80}
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm min-w-[3rem] text-center">{settings.fontSize}%</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  aria-label="הגדל טקסט"
                  disabled={settings.fontSize >= 150}
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Contrast Toggle */}
            <div className="space-y-2">
              <Button
                variant={settings.highContrast ? "default" : "outline"}
                className="w-full justify-start"
                onClick={toggleHighContrast}
                aria-label={settings.highContrast ? "כבה ניגודיות גבוהה" : "הפעל ניגודיות גבוהה"}
                aria-pressed={settings.highContrast}
              >
                <Eye className="w-4 h-4 ml-2" />
                ניגודיות גבוהה
              </Button>
            </div>

            {/* Link Highlight Toggle */}
            <div className="space-y-2">
              <Button
                variant={settings.linkHighlight ? "default" : "outline"}
                className="w-full justify-start"
                onClick={toggleLinkHighlight}
                aria-label={settings.linkHighlight ? "כבה הדגשת קישורים" : "הפעל הדגשת קישורים"}
                aria-pressed={settings.linkHighlight}
              >
                <Focus className="w-4 h-4 ml-2" />
                הדגשת קישורים
              </Button>
            </div>

            {/* Keyboard Navigation Toggle */}
            <div className="space-y-2">
              <Button
                variant={settings.keyboardNavigation ? "default" : "outline"}
                className="w-full justify-start"
                onClick={toggleKeyboardNavigation}
                aria-label={settings.keyboardNavigation ? "כבה ניווט מקלדת" : "הפעל ניווט מקלדת"}
                aria-pressed={settings.keyboardNavigation}
              >
                <Keyboard className="w-4 h-4 ml-2" />
                ניווט מקלדת
              </Button>
            </div>

            {/* Reset Button */}
            <div className="pt-2 border-t border-border">
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground"
                onClick={resetSettings}
                aria-label="אפס הגדרות נגישות"
              >
                <RotateCcw className="w-4 h-4 ml-2" />
                אפס הגדרות
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;