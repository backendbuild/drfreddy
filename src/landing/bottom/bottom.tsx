import React from 'react';

const Bottom = () => {
  return (
    <div className="card container bg-blue-950 rounded-tr-xl rounded-tl-xl h-96 flex mt-8">
      <div className="footer-content flex-grow flex flex-col items-end justify-end text-white p-6">
        {/* Peta menggunakan Google Maps */}
        <div className="map flex-shrink-0 mb-4">
          <iframe
            title="Google Maps"
            width="430"
            height="230"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.952111701266!2d106.86821347441077!3d-6.270028461379188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2f6df8347e3%3A0x1556154c3bd854b1!2sRS%20Umum%20Bhayangkara%20Tk.%20I%20R.%20Said%20Sukanto!5e0!3m2!1sid!2sid!4v1703662240997!5m2!1sid!2sid"
            allowFullScreen
          />
        </div>
        {/* Informasi lokasi */}
        <div className="location-info">
          <h3 className="font-extrabold">Lokasi Kami</h3>
          <p>Jalan Cipinang</p>
          <p>Provinsi DKI JAKARTA, Jakarta Timur, Kramat Jati, 13510</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
