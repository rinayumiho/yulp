class Api::ReviewsController < ApplicationController
    def index 
        @reviews = Review.all.where(business_id: params[:business_id])
        render :index
    end

    def show 
        @review = Review.find(params[:id])
        render :show 
    end

    def create 
        @review = Review.new(review_params)
        if @review.save 
            render :show 
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show 
        else
            render json: ["Update failed"], status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy if @review
    end

    private
    def review_params
        params.require(:review).permit(:body, :user_id, :business_id, :stars)
    end
end