// ===== 产品数据 =====
const PRODUCT_CATEGORIES = [
  { id: 'all', name: '全部' },
  { id: 'appliance', name: '家电钣金系列' },
  { id: 'medical', name: '医疗钣金系列' },
  { id: 'cnc', name: 'CNC加工系列' },
  { id: 'hardware', name: '五金件钣金类' },
  { id: 'robot', name: '机器人钣金件' },
  { id: 'backpanel', name: '钣金背板系列' },
  { id: 'rack', name: '精密机架钣金' },
  { id: 'bracket', name: '支架钣金系列' },
  { id: 'plastic', name: '塑胶件手板类' },
  { id: 'auto', name: '车零配件钣金' },
  { id: 'chassis', name: '精密机箱钣金' },
  { id: 'electronics', name: '电子钣金系列' },
  { id: 'metal', name: '金属制品钣金' },
];

const PRODUCTS = [
  { cat: 'appliance', name: '裁床设备机座框架', desc: '裁床设备机座框架，尺寸2000*4000，孔位装配要求高，表面烤漆处理，厚度3.0-20.0mm', tag: '热销', img: 'IMG_E9561.JPG' },
  { cat: 'appliance', name: '洗衣机内桶支架', desc: '洗衣机内部支撑结构件，高强度冷轧钢板，冲压折弯成型', tag: '', img: 'product-2.jpg' },
  { cat: 'appliance', name: '烤箱门框钣金', desc: '烤箱门框钣金件，耐高温喷涂，平整度高', tag: '', img: 'product-3.jpg' },
  { cat: 'appliance', name: '冰箱侧板钣金', desc: '冰箱侧板钣金件，精度高，表面无划痕', tag: '定制', img: 'product-4.jpg' },
  { cat: 'medical', name: '医疗检测仪外壳', desc: '医疗设备专用外壳，符合GMP洁净要求，表面拉丝处理', tag: '定制', img: 'product-5.jpg' },
  { cat: 'medical', name: '监护仪钣金结构件', desc: '监护仪内部钣金支架，精密折弯，公差±0.1mm', tag: '', img: 'product-6.jpg' },
  { cat: 'medical', name: '医用推车钣金件', desc: '医用推车车身钣金，不锈钢材质，防锈耐腐蚀', tag: '', img: 'product-7.jpg' },
  { cat: 'cnc', name: 'CNC精密铝合金件', desc: '五轴联动CNC加工，公差可达±0.02mm，铝合金材质', tag: '主推', img: 'product-8.jpg' },
  { cat: 'cnc', name: 'CNC不锈钢加工件', desc: '不锈钢CNC车铣加工，适用于高端设备结构件', tag: '', img: 'product-9.jpg' },
 { cat: 'cnc', name: 'CNC铜件精密加工', desc: '铜材CNC精密加工，导电性好，适用于电子连接器', tag: '' },
  { cat: 'hardware', name: '精密五金冲压件', desc: '五金冲压件，批量生产，一致性好', tag: '' },
  { cat: 'hardware', name: '弹性五金弹片', desc: '不锈钢弹片冲压，弹性好，寿命长', tag: '' },
  { cat: 'hardware', name: '五金连接件', desc: '各类五金连接片、固定片，来图定制', tag: '' },
  { cat: 'robot', name: '机器人关节钣金件', desc: '工业机器人关节外壳，轻量化设计，高强度铝合金', tag: '新业务' },
  { cat: 'robot', name: '机器人臂钣金结构件', desc: '机械臂钣金外壳，精密折弯，表面阳极氧化', tag: '' },
  { cat: 'robot', name: '机器人底座钣金', desc: '机器人底座钣金件，承重能力强，焊接加工', tag: '' },
  { cat: 'backpanel', name: '家电背板钣金', desc: '家电设备背板钣金，冲压成型，精度高', tag: '' },
  { cat: 'backpanel', name: '电子设备背板', desc: '电子设备背板钣金，散热孔冲孔加工', tag: '' },
  { cat: 'backpanel', name: '机箱背板钣金', desc: '机箱机柜背板，安装孔位精准', tag: '' },
  { cat: 'rack', name: '服务器机架钣金', desc: '服务器机柜机架，19英寸标准，SPCC材质', tag: '主推' },
  { cat: 'rack', name: '工控机架钣金', desc: '工业控制机架钣金，焊接加工，表面喷塑', tag: '' },
  { cat: 'rack', name: '测试机架钣金', desc: '测试设备机架，高精度折弯，公差±0.1mm', tag: '' },
  { cat: 'bracket', name: '设备安装支架', desc: '各类设备安装支架，来图定制，焊接+折弯', tag: '' },
  { cat: 'bracket', name: '墙面固定支架', desc: '墙面安装支架，承重设计，镀锌处理', tag: '' },
  { cat: 'bracket', name: '管道支架钣金', desc: '管道支撑支架，冲压折弯一体成型', tag: '' },
  { cat: 'plastic', name: '塑胶手板模型', desc: 'CNC塑胶手板加工，ABS/PC/亚克力材质', tag: '' },
  { cat: 'plastic', name: '塑胶外壳手板', desc: '产品外观手板，快速成型，表面处理', tag: '' },
  { cat: 'plastic', name: '塑胶结构件手板', desc: '结构验证手板，装配测试用', tag: '' },
  { cat: 'auto', name: '汽车内饰钣金件', desc: '汽车内饰结构件，通过IATF16949认证', tag: '车规级' },
  { cat: 'auto', name: '发动机周边钣金', desc: '发动机周边支架钣金，耐高温材质', tag: '' },
  { cat: 'auto', name: '电池包壳体钣金', desc: '新能源汽车电池包壳体，高强度焊接', tag: '新业务' },
  { cat: 'chassis', name: '工业机箱定制', desc: '工业控制机箱，非标定制，IP54防护', tag: '主推' },
  { cat: 'chassis', name: '服务器机箱钣金', desc: '服务器机箱钣金，19英寸标准，散热设计', tag: '' },
  { cat: 'chassis', name: '配电柜机箱', desc: '低压配电柜机箱，厚板折弯，焊接加工', tag: '' },
  { cat: 'electronics', name: '电子设备外壳', desc: '电子设备钣金外壳，精密折弯，表面氧化', tag: '' },
  { cat: 'electronics', name: 'EMI屏蔽罩钣金', desc: '电子屏蔽罩，不锈钢材质，EMI屏蔽', tag: '' },
  { cat: 'electronics', name: '电源外壳钣金', desc: '开关电源外壳，散热孔设计，冲压加工', tag: '' },
  { cat: 'metal', name: '不锈钢展示架', desc: '不锈钢展示架，拉丝处理，美观耐用', tag: '' },
  { cat: 'metal', name: '金属工具箱', desc: '金属工具箱钣金，定制尺寸，锁扣设计', tag: '' },
  { cat: 'metal', name: '金属通风口盖板', desc: '通风口盖板，冲孔加工，镀锌材质', tag: '' },
];


// ===== 案例数据 =====
const CASES = [
  { industry: '家电行业', title: '某知名空调品牌外机钣金配套', desc: '年供货量120万套，良率99.8%' },
  { industry: '医疗设备', title: '医用检测仪外壳精密钣金', desc: '符合医疗级表面处理标准' },
  { industry: '新能源', title: '储能电池包壳体批量交付', desc: '通过UL认证，年产能50万套' },
  { industry: '汽车行业', title: '新能源汽车电池包结构件', desc: 'IATF16949认证，车规级品质' },
  { industry: '通信行业', title: '5G通信基站机柜', desc: '防护等级IP55，批量出口' },
  { industry: '工业自动化', title: '工业机器人钣金外壳', desc: '轻量化设计，减重30%' },
  { industry: '食品设备', title: '食品机械不锈钢钣金', desc: '符合食品级不锈钢标准' },
  { industry: '安防监控', title: '监控设备外壳钣金', desc: '户外防护，耐候性强' },
  { industry: '物流设备', title: '智能仓储货架钣金', desc: '重型货架，承重500kg/层' },
];

// ===== 新闻数据 =====
const NEWS = [
  { date: '2026-10-20', title: '江发精密钣金通过IATF16949汽车质量体系复审', category: '公司新闻', desc: '近日，我司顺利通过IATF16949汽车行业质量管理体系年度复审，标志着公司在汽车零部件配套领域的质量管控能力再获权威认可。' },
  { date: '2026-10-12', title: '激光切割加工精度影响因素分析与控制', category: '技术分享', desc: '激光切割是钣金加工的核心工序之一，切割精度直接影响后续折弯和装配质量。本文从设备、材料、工艺参数三个维度分析影响因素。' },
  { date: '2026-09-28', title: '新能源储能钣金市场趋势与技术发展', category: '行业观察', desc: '随着储能行业的快速发展，电池包壳体、储能机柜等钣金件需求持续增长。本文分析市场规模、技术要求和未来发展趋势。' },
  { date: '2026-09-15', title: '我司引进德国通快新一代激光切割机', category: '公司新闻', desc: '为进一步提升加工能力，我司引进德国通快TruLaser 3000 fiber新一代光纤激光切割机，加工效率提升40%。' },
  { date: '2026-09-03', title: '钣金折弯工艺常见问题及解决方案', category: '技术分享', desc: '折弯是钣金成型的关键工序，常见的回弹、开裂、尺寸偏差等问题如何解决？本文从工艺角度进行详细分析。' },
  { date: '2026-08-20', title: '医用钣金件的特殊要求与质量控制', category: '行业观察', desc: '医疗设备钣金件对材质、表面处理、洁净度都有特殊要求，本文详细介绍医用钣金的质量控制要点。' },
  { date: '2026-08-08', title: '不锈钢钣金表面处理工艺对比', category: '技术分享', desc: '拉丝、喷砂、电解抛光、喷涂...不锈钢钣金表面处理工艺各有什么特点？如何选择？' },
  { date: '2026-07-25', title: '祝贺我司获评"东莞市专精特新企业"', category: '公司新闻', desc: '经过多轮评审，我司成功获评2026年度东莞市"专精特新"中小企业，这是对我司技术创新能力的肯定。' },
];

// ===== 通用函数 =====
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2000);
}

function submitQuote(e) {
  e.preventDefault();
  showToast('提交成功！我们将在5分钟内与您联系');
  e.target.reset();
}

function submitContact(e) {
  e.preventDefault();
  showToast('留言已提交！我们会尽快回复您');
  e.target.reset();
}



// ===== 产品渲染 =====
function renderProducts(filter, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  container.innerHTML = list.map(p => {
    const idx = PRODUCTS.indexOf(p);
    
    // 核心判断：如果数据里有 img 属性，就渲染图片，否则渲染原本的 SVG 占位图
    const imgHtml = p.img 
      ? `<img src="images/${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;">`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
           <rect x="3" y="3" width="18" height="18" rx="2"/>
           <path d="M3 9h18M9 21V9"/>
         </svg>`;

    return `
    <div class="product-card" onclick="location.href='product-detail.html?id=${idx}'">
      <div class="product-img">
        ${p.tag ? '<span class="product-tag">' + p.tag + '</span>' : ''}
        ${imgHtml}
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
    </div>
  `;
  }).join('');
}




function renderTabs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = PRODUCT_CATEGORIES.map((c, i) => `
    <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="filterProducts('${c.id}', this)">${c.name}</button>
  `).join('');
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat, 'productGrid');
}

// ===== 案例渲染 =====
function renderCases(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = CASES.map(c => `
    <div class="case-card" onclick="showToast('查看案例：${c.title}')">
      <div class="case-overlay"></div>
      <div class="case-info">
        <div class="industry">${c.industry}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>
    </div>
  `).join('');
}

// ===== 新闻渲染 =====
function renderNews(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = NEWS.map(n => {
    const parts = n.date.split('-');
    return `
      <div class="news-item" onclick="showToast('查看新闻详情')">
        <div class="news-date-box">
          <div class="day">${parts[2]}</div>
          <div class="month">${parts[0]}.${parts[1]}</div>
        </div>
        <div class="news-item-info">
          <h3>${n.title}</h3>
          <p>${n.desc}</p>
          <span class="category">${n.category}</span>
        </div>
      </div>
    `;
  }).join('');
}// ===== 产品详情页渲染 =====
function renderProductDetail(productId) {
  const idx = parseInt(productId);
  if (isNaN(idx) || idx < 0 || idx >= PRODUCTS.length) {
    document.getElementById('productDetailContent').innerHTML = '<p style="text-align:center;color:#999;padding:60px 0;">产品不存在</p>';
    return;
  }
  const p = PRODUCTS[idx];
  const catName = (PRODUCT_CATEGORIES.find(c => c.id === p.cat) || {}).name || '';

  document.getElementById('detailTitle').textContent = p.name;
  document.getElementById('detailCategory').textContent = catName;
  document.getElementById('detailDesc').textContent = p.desc;
  document.getElementById('detailTag').textContent = p.tag || '定制产品';

  // 相关推荐（同分类的其他产品）
  const related = PRODUCTS.filter((item, i) => item.cat === p.cat && i !== idx).slice(0, 3);
  document.getElementById('relatedProducts').innerHTML = related.map((item, i) => {
    const relIdx = PRODUCTS.indexOf(item);
    
    // 判断相关推荐是否有图片
    const imgHtml = item.img 
      ? `<img src="images/${item.img}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;">`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
           <rect x="3" y="3" width="18" height="18" rx="2"/>
           <path d="M3 9h18M9 21V9"/>
         </svg>`;

    return `
      <div class="product-card" onclick="location.href='product-detail.html?id=${relIdx}'">
        <div class="product-img">
          ${item.tag ? '<span class="product-tag">' + item.tag + '</span>' : ''}
          ${imgHtml}
        </div>
        <div class="product-info">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

// ===== 获取URL参数 =====
function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// ===== 移动端菜单切换 =====
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('mobile-open');
  }
}

// 点击导航链接后自动关闭移动端菜单
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) navLinks.classList.remove('mobile-open');
    });
  });
});

// ===== 设备轮播图 =====
let currentSlide = 0;
const totalSlides = 2;

function moveSlide(dir) {
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(idx) {
  currentSlide = idx;
  updateSlider();
}

function updateSlider() {
  const track = document.querySelector('.slider-track');
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  document.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// 自动轮播
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}, 5000);
