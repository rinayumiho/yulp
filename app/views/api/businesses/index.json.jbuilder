@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business
        json.reviews do 
            json.array! business.reviews do |review|
                json.extract! review, :id, :body, :stars
            end
        end
        json.photoUrls business.photos.map { |photo| url_for(photo) }
    end
end