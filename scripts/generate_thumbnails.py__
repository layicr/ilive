#!/usr/bin/env python3
"""
演唱会图片批量处理脚本
生成缩略图和中等尺寸图片，保持原图不变
"""

from PIL import Image
import os
import sys
from pathlib import Path

class ImageOptimizer:
    def __init__(self, root_dir="."):
        self.root_dir = Path(root_dir)
        self.stats = {
            "processed": 0,
            "skipped": 0,
            "errors": 0,
            "size_saved": 0
        }
        
    def process_directory(self):
        """遍历 concert 目录下的所有图片"""
        concert_dir = self.root_dir / "concert"
        
        if not concert_dir.exists():
            print(f"错误: {concert_dir} 目录不存在")
            return
        
        print("开始处理演唱会图片...\n")
        
        # 查找所有图片文件
        image_extensions = {".jpg", ".jpeg", ".png", ".webp"}
        all_images = []
        
        for ext in image_extensions:
            all_images.extend(concert_dir.rglob(f"*{ext}"))
            all_images.extend(concert_dir.rglob(f"*{ext.upper()}"))
        
        # 过滤掉已生成的缩略图和中等尺寸图
        original_images = [
            img for img in all_images 
            if not img.name.endswith("_thumb.jpg") and not img.name.endswith("_medium.jpg")
        ]
        
        print(f"找到 {len(original_images)} 张原始图片\n")
        
        for img_path in original_images:
            self.process_image(img_path)
        
        self.print_summary()
    
    def process_image(self, img_path):
        """处理单张图片"""
        try:
            # 检查是否是海报目录（海报不需要缩略图）
            if "poster" in str(img_path):
                print(f"跳过海报: {img_path.relative_to(self.root_dir)}")
                self.stats["skipped"] += 1
                return
            
            # 检查是否已存在生成的文件
            thumb_path = img_path.with_name(f"{img_path.stem}_thumb.jpg")
            medium_path = img_path.with_name(f"{img_path.stem}_medium.jpg")
            
            needs_thumb = not thumb_path.exists()
            needs_medium = not medium_path.exists()
            
            if not needs_thumb and not needs_medium:
                print(f"跳过（已存在）: {img_path.relative_to(self.root_dir)}")
                self.stats["skipped"] += 1
                return
            
            # 打开图片
            with Image.open(img_path) as img:
                # 转换为 RGB 模式（处理 PNG 等格式）
                if img.mode in ('RGBA', 'LA', 'P'):
                    img = img.convert('RGB')
                
                original_size = img_path.stat().st_size
                
                # 生成缩略图 (120x80)
                if needs_thumb:
                    thumb_size = self.generate_thumbnail(img, thumb_path)
                    print(f"缩略图: {thumb_path.relative_to(self.root_dir)} ({thumb_size:.2f}KB)")
                
                # 生成中等尺寸 (800x600)
                if needs_medium:
                    medium_size = self.generate_medium(img, medium_path)
                    print(f"中等图: {medium_path.relative_to(self.root_dir)} ({medium_size:.2f}KB)")
                
                self.stats["processed"] += 1
                
        except Exception as e:
            print(f"处理失败 {img_path}: {e}")
            self.stats["errors"] += 1
    
    def generate_thumbnail(self, img, output_path):
        """生成缩略图 (120x80)"""
        # 计算裁剪尺寸（保持 3:2 比例）
        width, height = img.size
        target_ratio = 3 / 2
        current_ratio = width / height
        
        if current_ratio > target_ratio:
            # 太宽，按高度计算
            new_height = height
            new_width = int(height * target_ratio)
        else:
            # 太高，按宽度计算
            new_width = width
            new_height = int(width / target_ratio)
        
        # 计算裁剪区域
        left = (width - new_width) // 2
        top = (height - new_height) // 2
        right = left + new_width
        bottom = top + new_height
        
        # 裁剪并调整大小
        thumb = img.crop((left, top, right, bottom))
        thumb = thumb.resize((120, 80), Image.Resampling.LANCZOS)
        
        # 保存
        thumb.save(output_path, "JPEG", quality=80, optimize=True)
        
        return output_path.stat().st_size / 1024
    
    def generate_medium(self, img, output_path):
        """生成中等尺寸 (800x600)"""
        # 保持原始比例缩放
        img.thumbnail((800, 600), Image.Resampling.LANCZOS)
        img.save(output_path, "JPEG", quality=85, optimize=True)
        
        return output_path.stat().st_size / 1024
    
    def print_summary(self):
        """打印处理总结"""
        print("\n" + "="*60)
        print("处理完成总结")
        print("="*60)
        print(f"成功处理: {self.stats['processed']} 张图片")
        print(f"跳过: {self.stats['skipped']} 张图片")
        print(f"失败: {self.stats['errors']} 张图片")
        print("="*60)
        
        if self.stats['errors'] > 0:
            print("\n部分图片处理失败，请检查错误信息")
        else:
            print("\n所有图片处理成功！")

def main():
    """主函数"""
    # 检查 Pillow 是否已安装
    try:
        from PIL import Image
    except ImportError:
        print("错误: 需要安装 Pillow 库")
        print("请运行: pip install Pillow")
        sys.exit(1)
    
    # 获取脚本所在目录
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    
    print("演唱会图片优化工具")
    print(f"项目目录: {project_root}\n")
    
    optimizer = ImageOptimizer(project_root)
    optimizer.process_directory()

if __name__ == "__main__":
    main()
