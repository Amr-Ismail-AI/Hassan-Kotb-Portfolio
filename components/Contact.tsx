
import SocialLinks from "./SocialLinks";

const socialLinks = SocialLinks

const Contact = () => {
  return (
    <footer
      id="contact"
      className=" mt-20 border-t border-border-line py-8">
      <div className="site-container flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        
        {/* Copyright */}
        <p className="text-sm text-text-muted">
          © 2026 —{" "}
          <span className="font-bold text-blue">
            Hassan Kotb
          </span>
        </p>

        {/* Social Links */}

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-line text-text-muted transition-all duration-300 hover:border-blue hover:bg-blue/5 hover:text-blue hover:shadow-lg hover:shadow-blue/10"
              >
                <Icon size={19} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Contact;