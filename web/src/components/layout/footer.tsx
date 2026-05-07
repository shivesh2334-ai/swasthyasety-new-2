export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SwasthyaSetu</h3>
            <p className="text-sm">India's trusted teleconsultation platform with ABHA integration.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Find Doctors</li>
              <li>Link ABHA</li>
              <li>Health Records</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>NMC Compliance</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">support@swasthyasetu.in</p>
            <p className="text-sm mt-2">Emergency: 108</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024 SwasthyaSetu. All rights reserved. | Data stored in India (Mumbai)</p>
        </div>
      </div>
    </footer>
  )
}
