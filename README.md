# ERS Lying-In Clinic Website

A modern, responsive website for ERS Lying-In Clinic built with React and designed for deployment on GitHub Pages.

## 🏥 Features

- **Modern Design**: Clean, professional healthcare website design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Complete Healthcare Content**: 
  - Hero section with call-to-action
  - About section with clinic statistics
  - Services showcase with 6 key services
  - Contact information and contact form
- **SEO Optimized**: Proper meta tags and descriptions
- **GitHub Pages Ready**: Pre-configured for easy deployment

## 🚀 Quick Start

### Development
```bash
npm start
```
Opens the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```
Creates optimized production build in the `build` folder

## 📦 Deployment to GitHub Pages

### Prerequisites
1. Create a GitHub repository for your website
2. Push your code to the repository
3. Update the `homepage` field in `package.json` with your GitHub username

### Steps to Deploy

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/ers-website"
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages** in your repository:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Your site will be available at the URL you specified in homepage

## 🎨 Customization Guide

### 1. Update Clinic Information
Edit `src/App.js` to customize:
- Clinic name and branding
- Services offered
- Contact information
- Statistics and achievements

### 2. Modify Contact Details
Update the contact section in `src/App.js`:
```jsx
<div className="contact-item">
  <h3>📍 Address</h3>
  <p>Your Clinic Address<br />City, State ZIP</p>
</div>
<div className="contact-item">
  <h3>📞 Phone</h3>
  <p>Your Phone Number</p>
</div>
<div className="contact-item">
  <h3>✉️ Email</h3>
  <p>your-email@domain.com</p>
</div>
```

### 3. Update Services
Modify the services array in the services section:
```jsx
<div className="service-card">
  <div className="service-icon">🏥</div>
  <h3>Your Service Name</h3>
  <p>Description of your service</p>
</div>
```

### 4. Change Colors and Styling
Edit `src/App.css` to modify:
- Color scheme (currently uses healthcare blues and accent colors)
- Typography
- Spacing and layout
- Responsive breakpoints

### 5. Add Your Logo
- Replace `public/favicon.ico` with your clinic's favicon
- Update `public/logo192.png` and `public/logo512.png` with your logo
- Add logo to the navigation in `src/App.js`

## 🔧 Technical Details

### Built With
- **React 19.1.0** - Frontend framework
- **CSS3** - Styling with CSS Grid and Flexbox
- **GitHub Pages** - Hosting platform

### Project Structure
```
ers-website/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Website icon
│   └── manifest.json       # PWA configuration
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Website styling
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

### Key Features
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern CSS**: Gradient backgrounds, hover effects, and smooth transitions
- **Accessibility**: Semantic HTML and proper color contrast
- **SEO**: Meta tags, structured content, and descriptive text

## 🌐 Domain Setup (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain name
2. Update your domain's DNS settings to point to GitHub Pages
3. Update the `homepage` field in `package.json` to use your custom domain

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design approach
- Optimized touch targets
- Responsive typography
- Collapsible navigation
- Mobile-friendly forms

## 🆘 Support

### Common Issues
1. **Deployment fails**: Make sure your repository is public and the homepage URL is correct
2. **Styling issues**: Check that all CSS classes are properly named and imported
3. **Build errors**: Ensure all dependencies are installed with `npm install`

### Getting Help
- Check the [Create React App documentation](https://create-react-app.dev/)
- Visit [GitHub Pages documentation](https://pages.github.com/)
- Review [React documentation](https://reactjs.org/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Next Steps

1. **Customize the content** with your clinic's specific information
2. **Add real images** to replace placeholder content
3. **Set up analytics** to track website visits
4. **Add functionality** like appointment booking or patient portal
5. **Optimize for search engines** with additional SEO improvements

---

**Ready to deploy?** Just run `npm run deploy` after updating your GitHub username in package.json!
