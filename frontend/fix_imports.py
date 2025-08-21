#!/usr/bin/env python3
import os
import re
import glob

# Directorio de componentes UI
ui_dir = "src/components/ui"

# Patrones a reemplazar
patterns = [
    (r'@radix-ui/react-([a-z-]+)@[\d.]+', r'@radix-ui/react-\1'),
    (r'class-variance-authority@[\d.]+', r'class-variance-authority'),
    (r'clsx@[\d.]+', r'clsx'),
    (r'cmdk@[\d.]+', r'cmdk'),
    (r'embla-carousel-react@[\d.]+', r'embla-carousel-react'),
    (r'input-otp@[\d.]+', r'input-otp'),
    (r'lucide-react@[\d.]+', r'lucide-react'),
    (r'next-themes@[\d.]+', r'next-themes'),
    (r'react-day-picker@[\d.]+', r'react-day-picker'),
    (r'react-hook-form@[\d.]+', r'react-hook-form'),
    (r'react-resizable-panels@[\d.]+', r'react-resizable-panels'),
    (r'recharts@[\d.]+', r'recharts'),
    (r'sonner@[\d.]+', r'sonner'),
    (r'vaul@[\d.]+', r'vaul'),
]

# Buscar todos los archivos .tsx y .ts
files = glob.glob(os.path.join(ui_dir, "*.tsx")) + glob.glob(os.path.join(ui_dir, "*.ts"))

for file_path in files:
    print(f"Procesando {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Aplicar todos los patrones
    for pattern, replacement in patterns:
        content = re.sub(pattern, replacement, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("¡Importaciones arregladas!")
