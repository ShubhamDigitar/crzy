// NotifyCard.tsx
import { useState } from "react";
import { Card } from "../components/ui/card";

const NotifyCard = ({ onClose }: { onClose: () => void }) => {
  const handleAllow = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        // Your NotifyVisitors script will take over from here
        onClose();
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  return (
    <Card className="fixed top-16 right-4 w-80 p-4 bg-white shadow-lg z-50">
      <h3 className="font-semibold mb-3">Enable Notifications</h3>
      <p className="text-sm text-gray-600 mb-4">
        Stay updated with latest alerts and updates
      </p>
      <div className="flex gap-3">
        <div className="group">
          <button
            onClick={handleAllow}
            className="relative px-4 py-2 border-2 text-black rounded-md overflow-hidden transition-all duration-300 hover:text-white hover:border-transparent hover:scale-105"
          >
            <span className="relative z-10">Allow</span>
            <span className="absolute  inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Skip
        </button>
      </div>
    </Card>
  );
};

export default NotifyCard;
