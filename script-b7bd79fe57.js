// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 模态框功能
function showModal(type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let content = '';
    
    switch(type) {
        case 'volunteer':
            content = `
                <h2 style="text-align: center; margin-bottom: 30px; color: #2c3e50;">🤝 志愿者报名</h2>
                <form id="volunteerForm" onsubmit="submitVolunteerForm(event)">
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 500;">姓名</label>
                        <input type="text" name="name" placeholder="请输入您的姓名" required 
                               style="width: 100%; padding: 12px 15px; border: 2px solid #ddd; border-radius: 10px; font-size: 1em;">
                    </div>
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 500;">联系方式</label>
                        <input type="text" name="contact" placeholder="请输入您的联系方式" required 
                               style="width: 100%; padding: 12px 15px; border: 2px solid #ddd; border-radius: 10px; font-size: 1em;">
                    </div>
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 500;">意向小组</label>
                        <select name="team" required 
                                style="width: 100%; padding: 12px 15px; border: 2px solid #ddd; border-radius: 10px; font-size: 1em;">
                            <option value="">请选择意向小组</option>
                            <option value="logistics">后勤组</option>
                            <option value="feeding">投喂组</option>
                            <option value="medical">医疗组</option>
                            <option value="publicity">宣传组</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 500;">个人简介</label>
                        <textarea name="introduction" rows="4" placeholder="请简述您的相关经验或特长" 
                                  style="width: 100%; padding: 12px 15px; border: 2px solid #ddd; border-radius: 10px; font-size: 1em;"></textarea>
                    </div>
                    <button type="submit" 
                            style="width: 100%; background: #ff6b6b; color: white; border: none; padding: 15px; border-radius: 10px; font-size: 1.1em; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                        提交报名
                    </button>
                </form>
            `;
            break;
        case 'material':
            content = `
                <h2 style="text-align: center; margin-bottom: 30px; color: #2c3e50;">🎁 物资捐赠点</h2>
                <div style="margin-bottom: 30px;">
                    <h3 style="color: #ff6b6b; margin-bottom: 15px;">可捐赠物资</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 10px; background: #f8f9fa; margin-bottom: 10px; border-radius: 8px;">🧥 旧毛毯、旧衣物（干净无破损）</li>
                        <li style="padding: 10px; background: #f8f9fa; margin-bottom: 10px; border-radius: 8px;">🍖 猫粮、狗粮等宠物食品</li>
                        <li style="padding: 10px; background: #f8f9fa; margin-bottom: 10px; border-radius: 8px;">🧴 宠物洗护用品</li>
                        <li style="padding: 10px; background: #f8f9fa; margin-bottom: 10px; border-radius: 8px;">💊 简单医疗用品（碘伏、纱布等）</li>
                        <li style="padding: 10px; background: #f8f9fa; margin-bottom: 10px; border-radius: 8px;">🏠 纸箱、塑料布等搭建材料</li>
                    </ul>
                </div>
                <div>
                    <h3 style="color: #4ecdc4; margin-bottom: 15px;">捐赠地点</h3>
                    <div style="padding: 15px; background: #e8f5e9; border-radius: 10px; margin-bottom: 10px;">
                        <strong>📍 食堂门口</strong>
                        <p style="margin: 5px 0; color: #666;">设有"爱心物资区"捐赠箱</p>
                    </div>
                    <div style="padding: 15px; background: #e8f5e9; border-radius: 10px; margin-bottom: 10px;">
                        <strong>📍 超市入口</strong>
                        <p style="margin: 5px 0; color: #666;">设有"爱心物资区"捐赠箱</p>
                    </div>
                    <div style="padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <strong>📍 教学楼大厅</strong>
                        <p style="margin: 5px 0; color: #666;">设有"爱心物资区"捐赠箱</p>
                    </div>
                </div>
                <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; color: #856404;">
                    ⏰ 捐赠时间：工作日 9:00-18:00<br>
                    📞 如有问题请联系：13305987897
                </p>
            `;
            break;
        case 'cloud':
            content = `
                <h2 style="text-align: center; margin-bottom: 30px; color: #2c3e50;">💳 云投喂</h2>
                <div style="text-align: center; margin-bottom: 30px;">
                    <p style="margin-bottom: 20px; line-height: 1.8;">
                        没时间线下参与？没关系！您可以通过线上捐赠的方式，
                        为校园流浪动物提供食物和医疗保障。
                    </p>
                </div>
                <div style="margin-bottom: 30px;">
                    <h3 style="color: #ff6b6b; margin-bottom: 15px; text-align: center;">捐赠选项</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                        <button onclick="selectDonateAmount(10)" 
                                style="padding: 20px; border: 2px solid #ddd; border-radius: 10px; background: white; cursor: pointer; transition: all 0.3s ease; font-size: 1.2em; font-weight: 600; color: #2c3e50;">
                            ¥10 <span style="font-size: 0.8em; font-weight: normal;">一顿猫粮</span>
                        </button>
                        <button onclick="selectDonateAmount(30)" 
                                style="padding: 20px; border: 2px solid #ddd; border-radius: 10px; background: white; cursor: pointer; transition: all 0.3s ease; font-size: 1.2em; font-weight: 600; color: #2c3e50;">
                            ¥30 <span style="font-size: 0.8em; font-weight: normal;">一天口粮</span>
                        </button>
                        <button onclick="selectDonateAmount(50)" 
                                style="padding: 20px; border: 2px solid #ff6b6b; border-radius: 10px; background: #fff5f5; cursor: pointer; transition: all 0.3s ease; font-size: 1.2em; font-weight: 600; color: #ff6b6b;">
                            ¥50 <span style="font-size: 0.8em; font-weight: normal;">一周口粮</span>
                        </button>
                        <button onclick="selectDonateAmount(100)" 
                                style="padding: 20px; border: 2px solid #ddd; border-radius: 10px; background: white; cursor: pointer; transition: all 0.3s ease; font-size: 1.2em; font-weight: 600; color: #2c3e50;">
                            ¥100 <span style="font-size: 0.8em; font-weight: normal;">医疗基金</span>
                        </button>
                    </div>
                </div>
                <div style="padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h3 style="margin-bottom: 15px; color: #2c3e50;">💖 感谢您的爱心</h3>
                    <p style="line-height: 1.8; color: #666;">
                        每一笔捐赠都将用于校园流浪动物的食物采购和医疗救助。
                        我们会定期在公众号和网站上公示捐赠明细和使用情况，
                        让您的爱心真正帮助到需要的小生命。
                    </p>
                </div>
            `;
            break;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 提交志愿者表单
function submitVolunteerForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // 模拟提交成功
    alert('🎉 报名成功！感谢您的参与！我们会尽快与您联系。');
    closeModal();
}

// 选择捐赠金额
function selectDonateAmount(amount) {
    const confirmed = confirm(`💕 您选择了捐赠 ¥${amount}\n\n确定要继续吗？`);
    if (confirmed) {
        alert('🙏 感谢您的爱心捐赠！我们会将您的每一分钱都用在刀刃上，温暖更多小生命。');
        closeModal();
    }
}

// 提交联系表单
function submitForm(event) {
    event.preventDefault();
    alert('✅ 留言提交成功！我们会尽快回复您。');
    event.target.reset();
}

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }
    });

    // 滚动动画观察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);

    // 观察所有section
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // 数字增长动画
    animateNumbers();
});

// 数字增长动画
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(num => {
        const targetValue = num.textContent;
        
        // 检查是否包含百分号
        if (targetValue.includes('%')) {
            return; // 百分号不进行动画
        }
        
        // 检查是否包含加号或其他符号
        const numericValue = parseInt(targetValue.replace(/[^0-9]/g, ''));
        if (isNaN(numericValue)) return;
        
        let currentValue = 0;
        const increment = numericValue / 50;
        const suffix = targetValue.replace(/[0-9]/g, '');
        
        const animation = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                num.textContent = targetValue;
                clearInterval(animation);
            } else {
                num.textContent = Math.floor(currentValue) + suffix;
            }
        }, 30);
    });
}

// 响应式导航菜单
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// 添加触摸支持
document.addEventListener('touchstart', function() {
    // 提升触摸设备上的交互体验
}, { passive: true });

// 性能优化：延迟加载非关键资源
window.addEventListener('load', function() {
    // 页面完全加载后执行的操作
    setTimeout(function() {
        // 可以在这里添加一些延迟加载的内容
        console.log('页面加载完成，爪爪守护计划准备就绪！');
    }, 500);
});

// 错误处理
window.onerror = function(message, source, lineno, colno, error) {
    console.log('发生错误：', message);
    return true; // 阻止默认错误处理
};

// 导出函数供HTML调用
window.scrollToSection = scrollToSection;
window.showModal = showModal;
window.closeModal = closeModal;
window.submitVolunteerForm = submitVolunteerForm;
window.selectDonateAmount = selectDonateAmount;
window.submitForm = submitForm;