
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center space-y-8 fade-in-up">
        {/* Logo */}
        <div className="mb-4">
          <img 
            src="/lovable-uploads/42a9deb1-91b8-4835-99b1-45a5960ecc57.png" 
            alt="Bora Correr Logo" 
            className="h-16 w-auto" 
          />
        </div>
        
        {/* Runner GIF */}
        <div className="relative">
          <img 
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWJwdWhqYTd6ajloNzhycHpoejM5cW4yM2k3dTR3aTg2aXVkdXQ4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y0mzzTsnNcar9qR5DS/giphy.gif"
            alt="Corredor carregando"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </div>
        
        {/* Loading text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold gradient-text">
            Preparando sua corrida...
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
